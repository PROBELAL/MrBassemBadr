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

        try {
            const response = await fetch("https://mr-bassem-badr-backend.vercel.app/userRegister", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ username, email, password })
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