import "./index.css"
import { Flex, Button } from "antd"
const Header = () => {
    return(
        <div className='main_header'>
            <Flex justify="space-between" align="center">
                <p>logo</p>
                <div>
                    <Button>
                        Sign in
                    </Button>
                </div>
            </Flex>
        </div>
    )
}
export default Header