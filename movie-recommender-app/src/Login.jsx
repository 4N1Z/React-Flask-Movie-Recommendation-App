import React from 'react'

function Login() {
    return (
        <div>

            <div className="grid">
                <form action="#" method="#" className="form login">
                    <div className="form__field">
                        <label htmlFor="login__username">
                            <svg className="icon">
                                <use xlinkHref="#user" />
                            </svg>
                            <span className="hidden">Username</span>
                        </label>
                        <input
                            id="login__username"
                            type="text"
                            name="username"
                            className="form__input"
                            placeholder="Username"
                            required
                        />
                    </div>
                    <div className="form__field">
                        <label htmlFor="login__password">
                            <svg className="icon">
                                <use xlinkHref="#lock" />
                            </svg>
                            <span className="hidden">Password</span>
                        </label>
                        <input
                            id="login__password"
                            type="password"
                            name="password"
                            className="form__input"
                            placeholder="Password"
                            required
                        />
                    </div>
                    <div className="form__field">
                        <input type="submit" value="Sign In" />
                    </div>
                </form>
                <p className="text--center">
                    Not a member? <a href="#">Sign up now</a>{' '}
                    <svg className="icon">
                        <use xlinkHref="assets/images/icons.svg#arrow-right" />
                    </svg>
                </p>
            </div>
        </div>




    )
}

export default Login