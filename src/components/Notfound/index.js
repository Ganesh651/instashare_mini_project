import { useNavigate } from 'react-router-dom'
import { NotfoundContainer, NotfoundImage, Heading, Paragraph, Button } from './notfound'

const Notfound = () => {
  const navigate = useNavigate()

  const onClickNavigateToHome = () => {
    navigate("/")
  }

  return (
    <NotfoundContainer>
      <NotfoundImage
        src="https://res.cloudinary.com/dky69roxl/image/upload/v1687415338/erroring_1_pejmlx.png"
        alt="not found"
      />
      <Heading>Page Not Found</Heading>
      <Paragraph>
        we are sorry, the page you requested could not be found. Please go back
        to the homepage.
      </Paragraph>
      <Button
        onClick={onClickNavigateToHome}
        type="button"
      >
        Home Page
      </Button>
    </NotfoundContainer>
  )
}

export default Notfound