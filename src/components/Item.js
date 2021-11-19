import {
  CardWrapper,
  CardHeader,
  CardHeading,
  CardBody,
  CardIcon,
  CardFieldset,
  CardInput,
  CardOptionsItem,
  CardOptions,
  CardOptionsNote,
  CardButton,
  CardLink,
  DivProductos,
} from "./styledComponents";

const Item = ({titulo, stock, precio, imagenUrl }) => {
    return(
        <>
        { 
        stock >= 1
        ? 
        <>
            <CardWrapper>
              <CardHeader>
                <CardHeading>Sign in</CardHeading>
              </CardHeader>
              <CardBody>
                <CardFieldset>
                <img src={imagenUrl} alt={titulo} />
                </CardFieldset>
                <CardFieldset>
                  <CardButton type="button">Sign Up</CardButton>
                </CardFieldset>
                <CardFieldset>
                  <CardButton type="button">Sign Up</CardButton>
                </CardFieldset>
              </CardBody>
            </CardWrapper>
        </>
        :
        <>
            <CardWrapper>
              <CardHeader>
                <CardHeading>Sign in</CardHeading>
              </CardHeader>

              <CardBody>
                <CardFieldset>
                  <CardInput placeholder="Username" type="text" required />
                </CardFieldset>

                <CardFieldset>
                  <CardInput placeholder="E-mail" type="text" required />
                </CardFieldset>

                <CardFieldset>
                  <CardInput placeholder="Password" type="password" required />
                  <CardIcon className="fa fa-eye" eye small />
                </CardFieldset>

                <CardFieldset>
                  <CardOptionsNote>Or sign up with</CardOptionsNote>

                  <CardOptions>
                    <CardOptionsItem>
                      <CardIcon className="fab fa-google" big />
                    </CardOptionsItem>

                    <CardOptionsItem>
                      <CardIcon className="fab fa-twitter" big />
                    </CardOptionsItem>

                    <CardOptionsItem>
                      <CardIcon className="fab fa-facebook" big />
                    </CardOptionsItem>
                  </CardOptions>
                </CardFieldset>

                <CardFieldset>
                  <CardButton type="button">Sign Up</CardButton>
                </CardFieldset>

                <CardFieldset>
                  <CardLink>I already have an account</CardLink>
                </CardFieldset>
              </CardBody>
            </CardWrapper>
        </>
              }
        </>
    )
}

export default Item;
