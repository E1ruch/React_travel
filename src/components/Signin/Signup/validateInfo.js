export default function validateInfo(values) {
    let errors = {};

    if (!values.username.trim()) {
        errors.username = 'Требуется имя пользователя';
    }
    // else if (!/^[A-Za-z]+/.test(values.name.trim())) {
    //   errors.name = 'Enter a valid name';
    // }

    if (!values.email) {
        errors.email = 'Требуется электронная почта';
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
        errors.email = 'Адрес электронной почты недействителен';
    }
    if (!values.password) {
        errors.password = 'Требуется пароль';
    } else if (values.password.length < 6) {
        errors.password = 'Пароль должен быть не менее 6 символов';
    }

    if (!values.password2) {
        errors.password2 = 'Требуется пароль';
    } else if (values.password2 !== values.password) {
        errors.password2 = 'Пароли не совпадают';
    }
    return errors;
}