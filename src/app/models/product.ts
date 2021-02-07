import { NumberValueAccessor } from "@angular/forms";

export interface Product {
    title: string;
    price: number;
    category: string;
    imageUrl: string;
    $key: string;
}