export default interface ShoutOut {
    _id?:string,
    to:string,
    from:string,
    message:string,
    likes?:string[],
    image?:string
}