import { ConfigProvider, theme } from "antd"
import { Colors } from "./Colors";

const { useToken } = theme

const { compactAlgorithm } = theme;

export const ThemeProvider = ({children}) => {
    const { token } = useToken()

    return <ConfigProvider theme={{
        algorithm: [compactAlgorithm, ],
        token: {
            colorPrimary: '#005C91',
            blue5: '#005C91',
            fontSize: 20,
            fontFamily: 'Montserrat'
        },
    }}>
        <Colors />
        {children}
    </ConfigProvider>
}