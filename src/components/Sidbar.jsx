import { Box, Stack } from "@chakra-ui/react"
import { categories } from "../utils/constants"


function Sidbar({ setSelectedCategory, selectedCategory }) {


    return (
        <Stack
            direction="row" 
            sx={{
                overflowY: 'auto',
                height: { base: "auto", md: "95%" },
                flexDirection: { md: "column" },
            }}
        >
            {categories.map(category => {
                return (
                    <button
                        className="category-btn"
                        onClick={() => {setSelectedCategory({type: category.name})}}
                        style={{
                        background: category.name === selectedCategory && "#FC1503",
                        color: "white",
                        }}
                        key={category.name}
                    >
                        <span style={{ color: category.name === selectedCategory ? "white" : "red", marginRight: "15px" }}>
                        {category.icon}
                        </span>
                        <span style={{ opacity: category.name === selectedCategory ? "1" : "0.8" }}>
                        {category.name}
                        </span>
                    </button>
                )
            })}
        </Stack>
    )
}

export default Sidbar