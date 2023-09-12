import { CATEGORIES } from "@/service/static.api";
import { CategoriesContainer } from "./style";
import { CaretLeft, CaretRight } from "@phosphor-icons/react";
import { useKeenSlider } from "keen-slider/react";

export function Categories() {
    const [sliderRef, instanceRef] = useKeenSlider({
        slides: {
            perView: 6,
            spacing: 10
        },

        loop: true,
        renderMode: "performance",
    });

    return (
        <CategoriesContainer>
            <CaretLeft size={32} color="#2A2879" weight="bold" onClick={() => instanceRef.current?.prev()} />
            <div ref={sliderRef} className="keen-slider" id="box">
                {CATEGORIES.map((category: any) => {
                    return (
                        <div key={category.id} id="category" className="keen-slider__slide my-custom-slide">
                            {category.name}
                        </div>
                    )
                })}
            </div>
            <CaretRight size={32} color="#2A2879" weight="bold" onClick={() => instanceRef.current?.next()} />
        </CategoriesContainer>
    )
}