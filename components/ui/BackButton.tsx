import Link from "next/link";

export default function BackButton({
    href,
    children="वापस"
}:{
    href:string;
    children?:string;
}){

return (
<Link
href={href}
className="
inline-flex
items-center
gap-2
text-sm
text-[var(--muted)]
transition
hover:text-[var(--gold)]
"
>
← {children}
</Link>
)

}