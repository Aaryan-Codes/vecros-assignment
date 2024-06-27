import { createSlice } from "@reduxjs/toolkit";

const sampleData = [
    {
        id:1,
        title:"Blog 1",
        author:"Elon Mast",
        category:"Culture",
        date:"Jun 27, 2024",
        content:"<h2>What is Lorem Ipsum?</h2><p><strong>Lorem Ipsum</strong>&nbsp;is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p><p><br></p>"
    },
    {
        id:2,
        title:"Blog 2",
        category:"Style",
        author:"John Weak",
        date:"Jun 27, 2024",
        content:"<h1>Lorem Ipsum</h1><h3><strong>1914 translation by H. Rackham</strong></h3><p>But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure?</p><h3><strong>Section 1.10.33 of de Finibus Bonorum et Malorum, written by Cicero in 45 BC</strong></h3><p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.</p><p><br></p>"
    },
    {
        id:3,
        title:"Vecros is the best company",
        category:"Technology",
        author:"Tulsi Das Khan",
        date:"Jun 27, 2024",
        content:"Lorem ipsum is a pseudo-Latin text used in web design, typography, layout, and printing in place of English to emphasise design elements over content. It's also called placeholder (or filler) text. It's a convenient tool for mock-ups. It helps to outline the visual elements of a document or presentation, eg typography, font, or layout. Lorem ipsum is mostly a part of a Latin text by the classical author and philosopher Cicero. Its words and letters have been changed by addition or removal, so to deliberately render its content nonsensical; it's not genuine, correct, or comprehensible Latin anymore. While lorem ipsum's still resembles classical Latin, it actually has no meaning whatsoever. As Cicero's text doesn't contain the letters K, W, or Z, alien to latin, these, and others are often inserted randomly to mimic the typographic appearence of European languages, as are digraphs not to be found in the original."
    },
    {
        id:4,
        title:"Tailwind CSS",
        category:"Science",
        author:"John Doe",
        date:"Jun 27, 2024",
        content:"Lorem ipsum is a pseudo-Latin text used in web design, typography, layout, and printing in place of English to emphasise design elements over content. It's also called placeholder (or filler) text. It's a convenient tool for mock-ups. It helps to outline the visual elements of a document or presentation, eg typography, font, or layout. Lorem ipsum is mostly a part of a Latin text by the classical author and philosopher Cicero. Its words and letters have been changed by addition or removal, so to deliberately render its content nonsensical; it's not genuine, correct, or comprehensible Latin anymore. While lorem ipsum's still resembles classical Latin, it actually has no meaning whatsoever. As Cicero's text doesn't contain the letters K, W, or Z, alien to latin, these, and others are often inserted randomly to mimic the typographic appearence of European languages, as are digraphs not to be found in the original."
    },
    {
        id:7,
        title:"Material UI",
        category:"Science",
        author:"Kavya Singh",
        date:"Jun 27, 2024",
        content:"Lorem ipsum is a pseudo-Latin text used in web design, typography, layout, and printing in place of English to emphasise design elements over content. It's also called placeholder (or filler) text. It's a convenient tool for mock-ups. It helps to outline the visual elements of a document or presentation, eg typography, font, or layout. Lorem ipsum is mostly a part of a Latin text by the classical author and philosopher Cicero. Its words and letters have been changed by addition or removal, so to deliberately render its content nonsensical; it's not genuine, correct, or comprehensible Latin anymore. While lorem ipsum's still resembles classical Latin, it actually has no meaning whatsoever. As Cicero's text doesn't contain the letters K, W, or Z, alien to latin, these, and others are often inserted randomly to mimic the typographic appearence of European languages, as are digraphs not to be found in the original."
    },
    {
        id:5,
        title:"Startups",
        category:"Business",
        author:"Lakshya Pandey",
        date:"Jun 27, 2024",
        content:"Lorem ipsum is a pseudo-Latin text used in web design, typography, layout, and printing in place of English to emphasise design elements over content. It's also called placeholder (or filler) text. It's a convenient tool for mock-ups. It helps to outline the visual elements of a document or presentation, eg typography, font, or layout. Lorem ipsum is mostly a part of a Latin text by the classical author and philosopher Cicero. Its words and letters have been changed by addition or removal, so to deliberately render its content nonsensical; it's not genuine, correct, or comprehensible Latin anymore. While lorem ipsum's still resembles classical Latin, it actually has no meaning whatsoever. As Cicero's text doesn't contain the letters K, W, or Z, alien to latin, these, and others are often inserted randomly to mimic the typographic appearence of European languages, as are digraphs not to be found in the original."
    },
    {
        id:6,
        title:"Elections",
        category:"Politics",
        author:"Ravish Kumar",
        date:"Jun 27, 2024",
        content:"Lorem ipsum is a pseudo-Latin text used in web design, typography, layout, and printing in place of English to emphasise design elements over content. It's also called placeholder (or filler) text. It's a convenient tool for mock-ups. It helps to outline the visual elements of a document or presentation, eg typography, font, or layout. Lorem ipsum is mostly a part of a Latin text by the classical author and philosopher Cicero. Its words and letters have been changed by addition or removal, so to deliberately render its content nonsensical; it's not genuine, correct, or comprehensible Latin anymore. While lorem ipsum's still resembles classical Latin, it actually has no meaning whatsoever. As Cicero's text doesn't contain the letters K, W, or Z, alien to latin, these, and others are often inserted randomly to mimic the typographic appearence of European languages, as are digraphs not to be found in the original."
    }
]

const blogSlice = createSlice({
    name:"blog",
    initialState:{
        blogs:[],
        selectedCategory:"",
        alertStatus:false,
        alertMessage:null
    }
    ,
    reducers:{
        addPost:(state,action)=>{
            state.blogs.push(action.payload);
        },
        editPost:(state,action)=>{
            const index = state.blogs.findIndex(post => post.id === action.payload.id);
            if(index !== -1){
                state.blogs[index] = action.payload;
            }
        },
        deletePost:(state,action)=>{
            const index = state.blogs.findIndex(post => post.id === action.payload.id);
            state.blogs.splice(index,1);
        },
        setAlertStatus:(state,action)=>{
            state.alertStatus = action.payload;
        },
        setAlertMessage:(state,action)=>{
            state.alertMessage = action.payload;
        },
        setSampleData:(state,action)=>{
            state.blogs.push(...sampleData);
        },
        setCategoryPage:(state,action)=>{
            state.selectedCategory = action.payload;
        }
    }
})

export const {addPost,editPost,deletePost,setAlertStatus,setAlertMessage,setSampleData,setCategoryPage} = blogSlice.actions;
export default blogSlice.reducer;