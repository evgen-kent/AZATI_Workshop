export type IProductInfo = {
  id: number
  title: string
  image: string
  rating: number
  totalCost: number
  initialCost?: number
  discount?: number
  description?: string
  colors: string[]
  sizes: string[]
}