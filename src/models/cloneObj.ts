export default function cloneObj(obj: object) {
    return JSON.parse(JSON.stringify(obj));
}
