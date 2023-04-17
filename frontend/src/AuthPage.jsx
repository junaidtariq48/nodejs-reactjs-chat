import axios from 'axios';

const AuthPage = (props) => {
    const onSubmit = (e) => {
      e.preventDefault();
      const firstName = e.target.elements.firstName.value;
      const username = e.target.elements.username.value;
      const  secret  = e.target.elements.secret.value;

      const apiUrl = import.meta.env.VITE_APP_API_SERVER_URL;

      console.log(apiUrl)

      axios.post(
            apiUrl + 'authenticate',
            {
                username: username,
                firstName: firstName,
                secret: secret
            }
        )
        .then(r =>  props.onAuth({...r.data, secret: secret}) )
        .catch(e => console.log(e))
    };
  
    return (
      <div className="background">
        <form onSubmit={onSubmit} className="form-card">
          <div className="form-title">Welcome 👋</div>
  
          <div className="form-subtitle">Set a username & password to get started</div>
  
          <div className="auth">

            <div className="position-relative">
                <div className="auth-label">First Name</div>
                <input className="auth-input" name="firstName" />
            </div>

            <div className="position-relative">
                <div className="auth-label">Username</div>
                <input className="auth-input" name="username" />
            </div>

            <div className="position-relative">
                <div className="auth-label">Secret</div>
                <input className="auth-input" name="secret" type="password" />
            </div>


            <button className="auth-button" type="submit">
              Enter
            </button>
          </div>
        </form>
      </div>
    );
  };
  
  export default AuthPage;