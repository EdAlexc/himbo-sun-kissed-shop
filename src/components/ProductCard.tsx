import { ShoppingCart, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ProductCardProps {
  id: string;
  name: string;
  price: number;
  image: string;
  description?: string;
}

const ProductCard = ({ name, price, image, description }: ProductCardProps) => {
  return (
    <div className="group relative bg-card rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
      <div className="aspect-square overflow-hidden bg-gradient-beach">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      
      <div className="p-6">
        <h3 className="font-semibold text-lg mb-2">{name}</h3>
        {description && (
          <p className="text-muted-foreground text-sm mb-3">{description}</p>
        )}
        
        <div className="flex items-center justify-between">
          <span className="text-2xl font-bold text-primary">
            ${price}
          </span>
          
          <div className="flex items-center space-x-2">
            <Button
              variant="ghost"
              size="sm"
              className="p-2 rounded-full hover:bg-secondary"
            >
              <Heart className="w-4 h-4" />
            </Button>
            
            <Button
              size="sm"
              className="btn-secondary rounded-full px-4"
            >
              <ShoppingCart className="w-4 h-4 mr-2" />
              Add
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;