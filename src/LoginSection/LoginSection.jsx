import React, { useState } from 'react';
import styles from "./LoginSection.module.css"; 
import axios from 'axios';

const LoginSection = () => {
 
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

 
  const handleSubmit = async(e) => {
    e.preventDefault(); 
    if(!email || !password){
        return alert("يجب ادخال الايميل والباسورد")
    }
   
    try{
        const response = await axios.post("https://mr-bassem-badr-backend.vercel.app/userLogin",{
            email:email,
            password:password
        })
        const data = response.data;
        const myToken = data.token;
        localStorage.setItem("userToken", myToken);

        alert("تم الدخول بنجاح !");
        

    }catch(error){
       if (error.response) {
            
            alert(error.response.data.message);
        } else {
           
            alert("حدث خطأ في الاتصال بالسيرفر");
        }
    }
    
  };

  return (
    <section className={styles["login-section"]}>
      <div className={styles["login-card"]}>
        
      
        <div className={styles["login-header"]}>
          <h2 className={styles["login-title"]}>تسجيل الدخول</h2>
          <p className={styles["login-subtitle"]}>أهلاً بك في منصة مستر باسم بدر</p>
        </div>

     
        <form onSubmit={handleSubmit} className={styles["login-form"]}>
          
          <div className={styles["input-group"]}>
            <label htmlFor="email">البريد الإلكتروني</label>
            <input 
              type="email" 
              id="email"
              placeholder="أدخل بريدك الإلكتروني"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required 
            />
          </div>

          <div className={styles["input-group"]}>
            <label htmlFor="password">كلمة المرور</label>
            <input 
              type="password" 
              id="password"
              placeholder="أدخل كلمة المرور"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required 
            />
          </div>

          <button type="submit" className={styles["login-btn"]}>
            تسجيل الدخول
          </button>

        </form>
      </div>
    </section>
  );
};

export default LoginSection;