exports.login = (req, res) => {
    const { email, password } = req.body;

    console.log(req.body);

    // Check if email and password exist
    if (!email || !password) {
        return res.status(400).json({
            status: "fail",
            message: "Enter email or password",
        });
    }

    res.status(200).json({
        status: "success",
        message: "Logged In",
    });
};
