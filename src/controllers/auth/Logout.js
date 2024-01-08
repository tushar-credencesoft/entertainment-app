// Logout
const Logout = async (req, res) => {
  try {
    // cleraing the token from cookie
    await res.clearCookie("entertainment_app_token",  { secure: true });
    return res
      .status(200)
      .json({
        statusCode: 200,
        Status: "Success",
        msg: "Successfully Logout.",
      });
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .json({ statusCode: 500, success: "false", msg: error.message });
  }
};

module.exports = Logout;
