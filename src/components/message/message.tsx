import { MessageValueContainer, Text} from "../../styles";


interface Props {
    joke : string
}

const Message: React.FC<Props> = ({joke}) : JSX.Element => {

    return (
        <MessageValueContainer>
            <Text>
               { joke }
            </Text>
        </MessageValueContainer>
    )
}

export default Message;