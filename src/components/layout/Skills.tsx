import { LogoCarouselDemo } from "../LogoCarouselDemo";
import { BentoCard, BentoGrid } from "@/components/magicui/bento-grid";
import { FileTextIcon } from "@radix-ui/react-icons";

const skillCards = [
    {
        name: "Skills1",
        description: "My technical skills",
        className: "col-span-1 max-h-[200px]",
        Icon: FileTextIcon,
        background: <div />,
        href: "#",
        cta: "Learn more"
    },
    {
        name: "Skills",
        description: "My technical skills",
        className: "col-span-1 max-h-[200px]",
        Icon: FileTextIcon,
        background: <div />,
        href: "#",
        cta: "Learn more"
    },
    {
        name: "Skills",
        description: "My technical skills",
        className: "col-span-1 max-h-[200px]",
        Icon: FileTextIcon,
        background: <div />,
        href: "#",
        cta: "Learn more"
    },
    {
        name: "Skills",
        description: "My technical skills",
        className: "col-span-1 max-h-[200px]",
        Icon: FileTextIcon,
        background: <div />,
        href: "#",
        cta: "Learn more"
    },
    {
        name: "Skills",
        description: "My technical skills",
        className: "col-span-1 max-h-[200px]",
        Icon: FileTextIcon,
        background: <div />,
        href: "#",
        cta: "Learn more"
    },
    {
        name: "Skills",
        description: "My technical skills",
        className: "col-span-1 max-h-[200px]",
        Icon: FileTextIcon,
        background: <div />,
        href: "#",
        cta: "Learn more"
    },
];

export function Skills(){
    return(
        <div className="px-4 md:p-8 lg:p-16">
            <LogoCarouselDemo />
            <BentoGrid className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-x-2 gap-y-2 items-start">
                {skillCards.map((card, index) => (
                    <BentoCard 
                        key={index}
                        name={card.name}
                        description={card.description}
                        className={card.className}
                        Icon={card.Icon}
                        background={card.background}
                        href={card.href}
                        cta={card.cta}
                    />
                ))}
            </BentoGrid>
        </div>
    )
}