export default interface IFlyweightFactory<T> {
    instance(key: string, ...args: any[]): T;
}