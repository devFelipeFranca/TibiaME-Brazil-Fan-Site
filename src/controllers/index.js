module.exports = {
  sendToken: async (req, res) => {
    const { token } = req.auth;

    const response = {
      success: true,
      message: 'Authentication successfully',
      token: `bearer ${token}`,
    };

    res.status(200).send(JSON.stringify(response));
  },
};
