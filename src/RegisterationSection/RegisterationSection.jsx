import styles from "./RegisterationSection.module.css"
import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

const Register = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    const handleRegister = async (e) => {
        e.preventDefault();
        setError(null); 
        
        
        if (username.startsWith(" ")) {
            setError("لا يمكن لاسم المستخدم أن يبدأ بمسافة");
            return;
        }
        
        if (username.endsWith(" ")) {
            setError("لا يمكن لاسم المستخدم أن ينتهي بمسافة");
            return;
        }
        
        if (username.includes("  ")) {
            setError("لا يمكن لاسم المستخدم احتواء أكثر من مسافة بين الكلمات");
            return;
        }

        
        if (password.includes(" ")) {
            setError("لا يمكن لكلمة المرور احتواء أي مسافات");
            return;
        }

        if (password.length < 8) {
            setError("كلمة المرور يجب أن تكون 8 أحرف أو أرقام على الأقل");
            return;
        }
        
        if (email.includes(" ")) {
            setError("البريد الإلكتروني لا يمكن أن يحتوي على مسافات");
            return;
        }

        const finalEmail = email.toLowerCase();
        const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
        if (!emailRegex.test(email)) {
            setError("صيغة البريد الإلكتروني غير صحيحة");
            return;
        }

        try {
            const response = await fetch("https://mr-bassem-badr-backend.vercel.app/userRegister", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
               
                body: JSON.stringify({ username, email: finalEmail, password })
            });

            const data = await response.json();

            if (!response.ok) {
                setError(data.message || "حدث خطأ أثناء التسجيل");
            } else {
                alert("تم إنشاء الحساب بنجاح! يرجى تسجيل الدخول.");
                navigate("/login");
            }
        } catch (err) {
            setError("فشل الاتصال بالسيرفر");
        }
    };

    return (
        <div className={styles.container}>
            <div className={styles.formWrapper}>
                <h2 className={styles.title}>إنشاء حساب جديد</h2>
                
                {error && <p className={styles.errorMsg}>{error}</p>}
                
                <form onSubmit={handleRegister} className={styles.form}>
                    <input
                        type="text"
                        placeholder="اسم المستخدم"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                        className={styles.inputField}
                    />
                    <input
                        type="email"
                        placeholder="البريد الإلكتروني"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        className={styles.inputField}
                    />
                    <input
                        type="password"
                        placeholder="كلمة المرور"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        className={styles.inputField}
                    />
                    <button type="submit" className={styles.submitBtn}>
                        إنشاء الحساب
                    </button>
                </form>
                
                <p className={styles.footerText}>
                    لديك حساب بالفعل؟ <Link to="/login" className={styles.link}>تسجيل الدخول</Link>
                </p>
            </div>
        </div>
    );
};

export default Register;