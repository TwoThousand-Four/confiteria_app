export class UserModel {

    constructor(
        public name: string,
        public last_name: string,
        public email: string,
        public birthday: Date | undefined,
        public role: string,
        public username: string,
        public password: string,
    ) {
    }
    
    static crearUsuario(event: {
        name: string,
        last_name: string,
        email: string
    }){
        return {
            name: event.email,
            last_name: event.last_name,
            email: event.email
        }
    }
}