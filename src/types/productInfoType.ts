import { IColors } from "./colorType"

export type IProductInfo = {
  id: number
  title: string
  image: string
  rating: number
  totalCost: number
  initialCost?: number
  discount?: number
  description?: string
  colors: IColors[]
  sizes?: string[]
}