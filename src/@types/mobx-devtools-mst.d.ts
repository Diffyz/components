declare module 'mobx-devtools-mst' {
	const makeInspectable: <T>(store: T) => void;
	export default makeInspectable;
}
