import React, { useState } from 'react';
import './auth.css';
import email_icon from '../../assets/email.png';
import password_icon from '../../assets/password.png';
import user_icon from '../../assets/person.png';
import logo from '../../assets/logo.jpg';
import AuthService from '../../services/auth.service';

function Auth() {
    const [loginEmail, setLoginEmail] = useState('');
    const [loginPassword, setLoginPassword] = useState('');
    const [signupUsername, setSignupUsername] = useState('');
    const [signupEmail, setSignupEmail] = useState('');
    const [signupPassword, setSignupPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleLogin = () => {
        // Logique de connexion...
        AuthService.login({ email: loginEmail, password: loginPassword })
            .then((res) => {
                console.log(res);
                // Traitement de la réponse de l'API (à adapter selon votre backend)
                if (res && res.success) {
                    // Redirection après la connexion réussie
                    // Par exemple :
                    // history.push('/dashboard');
                } else {
                    setErrorMessage('Adresse email ou mot de passe incorrect');
                }
            })
            .catch((error) => {
                console.error('Erreur de connexion :', error);
                setErrorMessage('Une erreur s\'est produite lors de la connexion');
            });
    };

    const handleSignup = () => {
        if (signupPassword !== confirmPassword) {
            setPasswordError('Les mots de passe ne correspondent pas');
            return;
        } else if (!signupUsername || !signupEmail || !signupPassword || !confirmPassword) {
            setPasswordError('Veuillez remplir tous les champs');
            return;
        } else {
            // Logique d'inscription...
            AuthService.signup({ username: signupUsername, email: signupEmail, password: signupPassword })
                .then((res) => {
                    console.log(res);
                    // Traitement de la réponse de l'API (à adapter selon votre backend)
                    if (res && res.success) {
                        // Redirection après l'inscription réussie
                        // Par exemple :
                        // history.push('/dashboard');
                    } else {
                        setErrorMessage('Une erreur s\'est produite lors de l\'inscription');
                    }
                })
                .catch((error) => {
                    console.error('Erreur d\'inscription :', error);
                    setErrorMessage('Une erreur s\'est produite lors de l\'inscription');
                });
        }
    };

    return (
        <div className='maincontainer'>
            <div className='title'>CREATEUR EN VUE</div>
            <div className='container'>
                <div className='logo'>
                    <img src={logo} alt='logo' />
                </div>
                <div className='subcontainer'>
                    <div className="header">
                        <div className="text">
                            Connexion
                        </div>
                        <div className="underline"></div>
                    </div>
                    <div className="inputs">
                        <div className="input">
                            <img src={email_icon} alt="" />
                            <input
                                type="email"
                                placeholder='Email'
                                value={loginEmail}
                                onChange={(e) => setLoginEmail(e.target.value)}
                            />
                        </div>
                        <div className="input">
                            <img src={password_icon} alt="" />
                            <input
                                type="password"
                                placeholder="Mot de passe"
                                value={loginPassword}
                                onChange={(e) => setLoginPassword(e.target.value)}
                            />
                        </div>
                    </div>
                    <div className="submit-container">
                        <div  className="submit" onClick={handleLogin}>Se connecter</div>
                    </div>
                </div>
                <div className='subcontainer'>
                    <div className="header">
                        <div className="text">
                            Inscription
                        </div>
                        <div className="underline"></div>
                    </div>
                    <div className="inputs">
                        <div className="input">
                            <img src={user_icon} alt="" />
                            <input
                                type="text"
                                placeholder="Nom d'utilisateur"
                                value={signupUsername}
                                onChange={(e) => setSignupUsername(e.target.value)}
                            />
                        </div>
                        <div className="input">
                            <img src={email_icon} alt="" />
                            <input
                                type="email"
                                placeholder='Email'
                                value={signupEmail}
                                onChange={(e) => setSignupEmail(e.target.value)}
                            />
                        </div>
                        <div className="input">
                            <img src={password_icon} alt="" />
                            <input
                                type="password"
                                placeholder="Mot de passe"
                                value={signupPassword}
                                onChange={(e) => setSignupPassword(e.target.value)}
                            />
                        </div>
                        <div className="input">
                            <img src={password_icon} alt="" />
                            <input
                                type="password"
                                placeholder="Confirmer le mot de passe"
                                value={confirmPassword}
                                onChange={(e) => setConfirmPassword(e.target.value)}
                            />
                        </div>
                        {passwordError && (
                            <div className="error-message">
                                {passwordError}
                            </div>
                        )}
                    </div>
                    <div className="submit-container">
                        <div className="submit" onClick={handleSignup}>S'inscrire</div>
                    </div>
                </div>
            </div>
        </div>
        
    );
}

export default Auth;
