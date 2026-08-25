import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req, res) {
  // Only allow POST requests
  if (req.method !== "POST") {
    return res.status(405).json({
      success: false,
      message: "Method not allowed",
    });
  }

  try {
    const {
      name,
      mobile,
      email,
      country,
      location,
      product,
      requirement,
    } = req.body;

    // Check required fields
    if (
      !name ||
      !mobile ||
      !email ||
      !country ||
      !location ||
      !product ||
      !requirement
    ) {
      return res.status(400).json({
        success: false,
        message: "Please fill in all required fields.",
      });
    }

    const { data, error } = await resend.emails.send({
      from: "Venus Turntechniques <onboarding@resend.dev>",
      to: ["venus.turntechniques@gmail.com"],
      replyTo: email,
      subject: `New Product Inquiry - ${product}`,

      html: `
        <div style="font-family: Arial, sans-serif; max-width: 700px; margin: auto; padding: 25px; border: 1px solid #ddd; border-radius: 10px;">

          <h2 style="margin-bottom: 5px;">
            New Product Inquiry
          </h2>

          <p style="color: #666;">
            Venus Turntechniques Website
          </p>

          <hr />

          <h3>Customer Information</h3>

          <p>
            <strong>Name:</strong> ${name}
          </p>

          <p>
            <strong>Mobile:</strong> ${mobile}
          </p>

          <p>
            <strong>Email:</strong> ${email}
          </p>

          <p>
            <strong>Country:</strong> ${country}
          </p>

          <p>
            <strong>Location:</strong> ${location}
          </p>

          <h3>Product Information</h3>

          <p>
            <strong>Product Required:</strong> ${product}
          </p>

          <p>
            <strong>Requirement:</strong>
          </p>

          <div style="background: #f5f5f5; padding: 15px; border-radius: 6px;">
            ${requirement}
          </div>

          <hr />

          <p style="font-size: 12px; color: #888;">
            This inquiry was submitted through the Venus Turntechniques website.
          </p>

        </div>
      `,
    });

    if (error) {
      console.error("Resend error:", error);

      return res.status(500).json({
        success: false,
        message: "Unable to send inquiry email.",
      });
    }

    return res.status(200).json({
      success: true,
      message: "Inquiry submitted successfully.",
      id: data?.id,
    });
  } catch (error) {
    console.error("Server error:", error);

    return res.status(500).json({
      success: false,
      message: "Something went wrong. Please try again.",
    });
  }
}