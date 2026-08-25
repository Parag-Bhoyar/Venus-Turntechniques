import { Resend } from "resend";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({
      success: false,
      message: "Method not allowed",
    });
  }

  try {
    const apiKey = process.env.RESEND_API_KEY;

    if (!apiKey) {
      console.error("RESEND_API_KEY is missing");

      return res.status(500).json({
        success: false,
        message: "Email service is not configured.",
      });
    }

    const resend = new Resend(apiKey);

    const {
      name,
      mobile,
      email,
      country,
      location,
      product,
      requirement,
    } = req.body || {};

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
        message: "Please fill all required fields.",
      });
    }

    const { data, error } = await resend.emails.send({
      from: "Venus Turntechniques <onboarding@resend.dev>",
      to:["venus.turntechniques@gmail.com"],
      replyTo: email,
      subject: `New Product Inquiry - ${product}`,

      html: `
        <div style="font-family: Arial, sans-serif; max-width: 700px; margin: auto;">

          <h2>New Product Inquiry</h2>

          <p>
            A new inquiry has been submitted through
            the Venus Turntechniques website.
          </p>

          <hr>

          <h3>Customer Details</h3>

          <p><strong>Name:</strong> ${name}</p>

          <p><strong>Mobile:</strong> ${mobile}</p>

          <p><strong>Email:</strong> ${email}</p>

          <p><strong>Country:</strong> ${country}</p>

          <p><strong>Location:</strong> ${location}</p>

          <h3>Product Required</h3>

          <p>${product}</p>

          <h3>Requirement</h3>

          <p>${requirement}</p>

          <hr>

          <p>
            This inquiry was submitted from the
            Venus Turntechniques website.
          </p>

        </div>
      `,
    });

    if (error) {
      console.error("RESEND ERROR:", error);

      return res.status(500).json({
        success: false,
        message: error.message || "Unable to send email.",
      });
    }

    console.log("EMAIL SENT:", data);

    return res.status(200).json({
      success: true,
      message: "Inquiry submitted successfully.",
      id: data?.id,
    });

  } catch (error) {
    console.error("FUNCTION ERROR:", error);

    return res.status(500).json({
      success: false,
      message: error.message || "Server error.",
    });
  }
}