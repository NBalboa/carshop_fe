
class User {

    constructor(params){
        this.props = params;
    }

     isPasswordMatch() {
        return this.props.password === this.props.confirmPassword;
    }


    isFieldEmpty() {
        const {first_name, last_name, email, password, confirmPassword}  = this.props;

        return (!first_name || !last_name || !email || !password || !confirmPassword)
    }
    
    
}

const Validation = (req, res, next) => {
    const user = new User(req.body)
    if(!user.isFieldEmpty()) {
        if(user.isPasswordMatch()){
            next();
        }else {
            return res.json({success:false, message:"Password not match"})
        }
    } else {
        return res.json({success:false, message:"All fields required."})

    }
    // const {old_password, confirm_password, new_password} = req.body
    
}


module.exports = Validation