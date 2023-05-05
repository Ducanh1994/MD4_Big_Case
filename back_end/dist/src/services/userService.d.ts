declare class UserService {
    private userRepository;
    constructor();
    addUser: (user: any) => Promise<any>;
    checkUser: (user: any) => Promise<string>;
}
declare const _default: UserService;
export default _default;
