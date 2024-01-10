// Logout
const Logout = (req, res) => {
  try {
    // cleraing the token from cookie
<<<<<<< Updated upstream
    // { domain: 'entertainment-app-server.onrender.com', secure: true }
    res.clearCookie("entertainment_app_token", {
=======
    await res.clearCookie("entertainment_app_token", {
>>>>>>> Stashed changes
      httpOnly: true,
      sameSite: "None",
      secure: true,
    });
<<<<<<< Updated upstream
    return res
      .status(200)
      .json({
        statusCode: 200,
        Status: "Success",
        msg: "Successfully Logout.",
      });
=======

    return res.status(200).json({
      statusCode: 200,
      Status: "Success",
      msg: "Successfully Logout.",
    });
>>>>>>> Stashed changes
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .json({ statusCode: 500, success: "false", msg: error.message });
  }
};

module.exports = Logout;
