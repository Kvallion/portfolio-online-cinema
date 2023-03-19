import cn, { ClassValue } from "clsx"

type WithOnlyClasses = {
	classes?: string[]
	className?: never
}
type WithClass = {
	className?: string
	classes?: never
}

export type WithClasses = WithOnlyClasses | WithClass

function useClasses(classes: string[]): typeof cn
function useClasses(...classes: string[]): typeof cn
function useClasses(className?: string[] | string): typeof cn
function useClasses(classes: any) {
	const newCn: typeof cn = (...inputs: ClassValue[]) => {
		if (Array.isArray(classes)) return cn(...inputs, ...classes)
		else return cn(...inputs, classes)
	}

	return newCn
}

export default useClasses
