import { Star } from "@phosphor-icons/react";

export function Rating(rating: any) {

    const stars = Array.from({ length: 5 }, (_, index) => (
        <Star
            key={index}
            size={16}
            color="#8381D9"
            weight={index < rating ? 'fill' : 'bold'}
        />
    ));

    return stars
}
