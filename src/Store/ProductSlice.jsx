import { createSlice } from "@reduxjs/toolkit";
import PizzaImg from "../assets/imgSlider2.jpg";
import { GiFullPizza } from "react-icons/gi";
import { TbMeat } from "react-icons/tb";
import { LuSalad } from "react-icons/lu";
import { GiHamburger } from "react-icons/gi";
import { CiFries } from "react-icons/ci";
import { GiSandwich } from "react-icons/gi";




import img1 from "../assets/img1.jpeg"
import img2 from "../assets/img2.jpeg"
import img3 from "../assets/img3.jpeg"
import img4 from "../assets/img4.jpeg"
import img5 from "../assets/img5.jpeg"
import img6 from "../assets/img6.jpeg"
import img7 from "../assets/img7.jpeg"
import img8 from "../assets/img8.jpeg"

const initialState={
  Products : [
    {
      id: 1,
      title: "كورس النحو التأسيسي",
      image: img1,
      description: "شرح تفصيلي لقواعد النحو لطلاب الصف الأول الثانوي مع تدريبات مكثفة على النظام الحديث.",
      price: 150,
      ingredients: [
          { name: "شرح" },
          { name: "تدريبات" },
          { name: "امتحان" }
      ],
      category: "اولى ثانوى"
    },
    {
      id: 2,
      title: "كورس البلاغة الشامل",
      image: img2,
      description: "مقدمة قوية في علم البلاغة، شرح مبسط للصور الخيالية والمحسنات البديعية.",
      price: 150,
      ingredients: [
          { name: "شرح" },
          { name: "تدريبات" },
          { name: "مراجعة" }
      ],
      category: "اولى ثانوى"
    },
    {
      id: 3,
      title: "كورس الأدب والنصوص",
      image: img3,
      description: "دراسة العصور الأدبية المختلفة وتحليل النصوص الشعرية والنثرية بأسلوب ممتع.",
      price: 150,
      ingredients: [
          { name: "شرح" },
          { name: "نصوص" },
          { name: "استنتاج" }
      ],
      category: "اولى ثانوى"
    },
    {
      id: 4,
      title: "كورس القراءة المتحررة",
      image: img4,
      description: "تدريب عملي على كيفية التعامل مع قطع القراءة المتحررة واستنتاج الأفكار.",
      price: 150,
      ingredients: [
          { name: "قراءة" },
          { name: "تدريبات" },
          { name: "امتحان" }
      ],
      category: "اولى ثانوى"
    },
    {
      id: 5,
      title: "ورشة النحو المكثفة",
      image: img5,
      description: "ورشة عمل لحل مئات الأسئلة على كل دروس النحو المقررة.",
      price: 150,
      ingredients: [
          { name: "حل أسئلة" },
          { name: "تريكات" },
          { name: "مراجعة" }
      ],
      category: "اولى ثانوى"
    },
    {
      id: 6,
      title: "المراجعة النهائية (بلاغة)",
      image: img6,
      description: "مراجعة ليلة الامتحان لفرع البلاغة لضمان الدرجة النهائية.",
      price: 150,
      ingredients: [
          { name: "ملخص" },
          { name: "تدريبات" },
          { name: "امتحان" }
      ],
      category: "اولى ثانوى"
    },
    {
      id: 7,
      title: "المراجعة النهائية (أدب)",
      image: img7,
      description: "تجميعة لأهم نقاط الأدب والنصوص المتوقعة في الامتحان.",
      price: 150,
      ingredients: [
          { name: "شرح" },
          { name: "تدريبات" },
          { name: "مراجعة" }
      ],
      category: "اولى ثانوى"
    },
    {
      id: 8,
      title: "كورس الحل الشامل",
      image: img8,
      description: "حل امتحانات شاملة على المنهج بالكامل لكسر رهبة الامتحان.",
      price: 150,
      ingredients: [
          { name: "امتحانات" },
          { name: "أفكار" },
          { name: "تقييم" }
      ],
      category: "اولى ثانوى"
    },
    {
      id: 9,
      title: "كورس النحو المتقدم",
      image: img1,
      description: "شرح تفصيلي لقواعد النحو للصف الثاني الثانوي بأسلوب مستر باسم المبتكر.",
      price: 200,
      ingredients: [
          { name: "شرح" },
          { name: "تطبيق" },
          { name: "امتحان" }
      ],
      category: "تانيه ثانوى"
    },
    {
      id: 10,
      title: "كورس البلاغة وعلم المعاني",
      image: img2,
      description: "تعمق في فروع البلاغة وعلم المعاني مع تدريبات على أبيات شعرية متنوعة.",
      price: 200,
      ingredients: [
          { name: "شرح" },
          { name: "تدريبات" },
          { name: "مراجعة" }
      ],
      category: "تانيه ثانوى"
    },
    {
      id: 11,
      title: "كورس الأدب التفاعلي",
      image: img3,
      description: "ربط الأدب بالنصوص بطريقة تسهل الحفظ والفهم العميق.",
      price: 200,
      ingredients: [
          { name: "أدب" },
          { name: "نصوص" },
          { name: "تطبيق" }
      ],
      category: "تانيه ثانوى"
    },
    {
      id: 12,
      title: "كورس القراءة والتعبير",
      image: img4,
      description: "كيفية التعامل مع أسئلة القراءة المتحررة وكتابة التعبير الوظيفي والإبداعي.",
      price: 200,
      ingredients: [
          { name: "قراءة" },
          { name: "تعبير" },
          { name: "امتحان" }
      ],
      category: "تانيه ثانوى"
    },
    {
      id: 13,
      title: "معسكر النحو الشامل",
      image: img5,
      description: "معسكر تدريبي لحل أصعب أفكار النحو المتوقعة في الامتحانات.",
      price: 200,
      ingredients: [
          { name: "حل أسئلة" },
          { name: "تريكات" },
          { name: "مراجعة" }
      ],
      category: "تانيه ثانوى"
    },
    {
      id: 14,
      title: "ورشة النصوص المتحررة",
      image: img6,
      description: "تدريب مكثف على النصوص الشعرية والنثرية المتحررة.",
      price: 200,
      ingredients: [
          { name: "نصوص" },
          { name: "تحليل" },
          { name: "امتحان" }
      ],
      category: "تانيه ثانوى"
    },
    {
      id: 15,
      title: "المراجعة النهائية (تيرم)",
      image: img7,
      description: "مراجعة شاملة لجميع فروع المادة استعداداً لامتحان نهاية الفصل الدراسي.",
      price: 200,
      ingredients: [
          { name: "ملخص" },
          { name: "تدريبات" },
          { name: "مراجعة" }
      ],
      category: "تانيه ثانوى"
    },
    {
      id: 16,
      title: "كورس بنك الأسئلة",
      image: img8,
      description: "حل بنك أسئلة متكامل يغطي كل جزئيات المنهج.",
      price: 200,
      ingredients: [
          { name: "أسئلة" },
          { name: "أفكار" },
          { name: "تقييم" }
      ],
      category: "تانيه ثانوى"
    },
    {
      id: 17,
      title: "كورس النحو - الثانوية العامة",
      image: img1,
      description: "شرح المنهج بالكامل من الصفر، وتغطية كافة التريكات والأفكار العليا.",
      price: 250,
      ingredients: [
          { name: "شرح" },
          { name: "تريكات" },
          { name: "امتحان" }
      ],
      category: "تالته ثانوى"
    },
    {
      id: 18,
      title: "كورس البلاغة التراكمية",
      image: img2,
      description: "مراجعة البلاغة التراكمية وشرح منهج الصف الثالث الثانوي بالتفصيل.",
      price: 250,
      ingredients: [
          { name: "تأسيس" },
          { name: "شرح" },
          { name: "تدريبات" }
      ],
      category: "تالته ثانوى"
    },
    {
      id: 19,
      title: "كورس الأدب والمدارس الشعرية",
      image: img3,
      description: "شرح مفصل للمدارس الشعرية وفن الرواية والمسرحية.",
      price: 250,
      ingredients: [
          { name: "أدب" },
          { name: "نصوص" },
          { name: "ربط" }
      ],
      category: "تالته ثانوى"
    },
    {
      id: 20,
      title: "كورس القراءة المتحررة",
      image: img4,
      description: "التدريب على مهارات الاستنتاج والموازنة في قطع القراءة المتحررة.",
      price: 250,
      ingredients: [
          { name: "قراءة" },
          { name: "استنتاج" },
          { name: "امتحان" }
      ],
      category: "تالته ثانوى"
    },
    {
      id: 21,
      title: "ورشة النصوص الشعرية",
      image: img5,
      description: "ورشة عمل متخصصة في كيفية تفكيك وتحليل الأبيات الشعرية الغامضة.",
      price: 250,
      ingredients: [
          { name: "نصوص" },
          { name: "تحليل" },
          { name: "تطبيق" }
      ],
      category: "تالته ثانوى"
    },
    {
      id: 22,
      title: "كورس القصة (الأيام)",
      image: img6,
      description: "شرح وتلخيص أحداث قصة الأيام لطه حسين مع تدريبات الاستنتاج.",
      price: 250,
      ingredients: [
          { name: "قصة" },
          { name: "تلخيص" },
          { name: "أسئلة" }
      ],
      category: "تالته ثانوى"
    },
    {
      id: 23,
      title: "ليالي الامتحان (نحو وبلاغة)",
      image: img7,
      description: "أقوى مراجعة نهائية تركز على مفاتيح الحل السريعة والدقيقة.",
      price: 250,
      ingredients: [
          { name: "مراجعة" },
          { name: "أفكار عليا" },
          { name: "امتحانات" }
      ],
      category: "تالته ثانوى"
    },
    {
      id: 24,
      title: "معسكر الامتحانات الشاملة",
      image: img8,
      description: "حل امتحانات ثانوية عامة سابقة وامتحانات تجريبية مطابقة للمواصفات.",
      price: 250,
      ingredients: [
          { name: "امتحانات" },
          { name: "أفكار" },
          { name: "تقييم" }
      ],
      category: "تالته ثانوى"
    }
],
searchTerm:""

}

const ProductSlice=createSlice({
    name:"Products",
    initialState:initialState,
    reducers:{
        addProduct:(state,action)=>{state.Products.push(action.payload);},
        setSearchTerm:(state,action)=>{state.searchTerm=action.payload}
    }
})

export const {addProduct,setSearchTerm}=ProductSlice.actions;
export default ProductSlice.reducer;