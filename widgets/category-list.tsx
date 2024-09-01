'use client'

import Category from '@/components/ui/category'
import { useState } from 'react'

const CategoryList = () => {
	const [selectedCategory, setSelectedCategory] = useState('all')

	const handleCategoryClick = (name: string) => {
		setSelectedCategory(name)
	}

	return (
		<ul className='mt-6 flex items-center gap-4 overflow-x-scroll scroll-smooth'>
			{['all', 'work', 'reading', 'important'].map((item, index) => (
				<Category
					key={index}
					name={item}
					handleCategoryClick={handleCategoryClick}
					selectedCategory={selectedCategory}
				/>
			))}
		</ul>
	)
}

export default CategoryList
