import * as Yup from 'yup'
const requiredText = 'Заполните поле!';
export const editUserSchema = Yup.object().shape({
    nameEdited: Yup.string().required(requiredText),
    lastnameEdited: Yup.string().max(50, 'Слишком длинная фамилия').required(requiredText),
    middlenameEdited: Yup.string().max(20, 'Слишком длинное отчество'),
    phoneEdited: Yup.string().required(requiredText),
});
export const signInSchema = Yup.object().shape({
    emailOrPhone: Yup.string().max(50, 'Слишком длинное значение').required(requiredText),
    password: Yup.string().min(4, 'Слишком короткий пароль!').required(requiredText),
});
export const signUpSchema = Yup.object().shape({
    name: Yup.string().max(30, 'Слишком длинное имя').required(requiredText),
    lastname: Yup.string().max(30, 'Слишком длинная фамилия').required(requiredText),
    middlename: Yup.string().min(2, 'Слишком короткое отчество'),
    phone: Yup.string().required(requiredText),
    email: Yup.string().email('Введите корректный адрес электронной почты').required(requiredText),
    password: Yup.string().min(4, 'Слишком короткий пароль!').required(requiredText),
    passwordConfirm: Yup.string()
        .oneOf([Yup.ref('password'), ''], 'Пароли не совпадают!')
        .required(requiredText),
});
export const editAddressSchema = Yup.object().shape({
    name: Yup.string().required('Введите название адреса'),
});
export const pickupSchema = Yup.object().shape({
    date: Yup.date().required('Выберите дату'),

    name: Yup.string().max(30, 'Слишком длинное имя').required(requiredText),
    lastname: Yup.string().max(30, 'Слишком длинная фамилия').required(requiredText),
    middlename: Yup.string().min(6, 'Слишком короткое отчество'),
    phone: Yup.string().required(requiredText),
    email: Yup.string().email('Введите корректный адрес электронной почты'),
    comment: Yup.string(),
});
export const deliverySchema = Yup.object().shape({
    addressName: Yup.string().required(requiredText),
    name: Yup.string().max(30, 'Слишком длинное имя').required(requiredText),
    lastname: Yup.string().max(30, 'Слишком длинная фамилия').required(requiredText),
    middlename: Yup.string().min(6, 'Слишком короткое отчество'),
    phone: Yup.string().required(requiredText),
    email: Yup.string().email('Введите корректный адрес электронной почты'),
    comment: Yup.string(),
});
export const resetPasswordSchema = Yup.object().shape({
    emailOrPhone: Yup.string().required(requiredText),
});

export const subscribeNotification = Yup.object().shape({
    name: Yup.string()
        .required(requiredText),
    email: Yup.string()
        .email('Введите корректный адрес электронной почты')
        .required(requiredText),
    phone: Yup.string()
        .required(requiredText),
});
