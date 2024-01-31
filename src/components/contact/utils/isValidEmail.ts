const isValidEmail = (email: string) => {
    console.log({email})
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    console.log({'test':  re.test(email)})

    return re.test(email);
}

export default isValidEmail