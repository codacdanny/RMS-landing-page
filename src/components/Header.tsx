import {
  Box,
  Flex,
  ButtonGroup,
  Button,
  Text,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  IconButton,
  Link,
  LinkBox,
  Heading,
} from "@chakra-ui/react";
import bgImage from "../Images/bgImage.svg";
import { HamburgerIcon } from "@chakra-ui/icons";

const Header = () => {
  const primaryFontWeight: number = 600;
  const primaryLineheight: number = 2.06;

  const topRightButoonStyles = {
    fontWeight: primaryFontWeight,
    lineHeight: primaryLineheight,
  };

  const flex = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };

  const LoginButton = () => <Link {...topRightButoonStyles}>Login</Link>;

  const SignUpButton = () => (
    <Link variant="outline" {...topRightButoonStyles}>
      Sign Up
    </Link>
  );

  return (
    <Box
      h={{ base: "60vh", lg: "75vh" }}
      bgImage={{
        base: "linear-gradient(90.67deg, #3E6F7C 0%, #2B6777 104.03%)",
        lg: bgImage,
      }}
      color="#FCFCFC"
      bgSize="cover"
      bgRepeat="no-repeat"
      bgPos="center">
      <Flex
        justifyContent="space-between"
        alignItems="center"
        px="1rem"
        py=".5rem">
        <Box>
          <Text
            as="h1"
            fontStyle="revert-layer"
            fontWeight="700"
            letterSpacing={4}
            fontSize={{ base: "1.3rem", lg: "2.2rem" }}
            fontFamily="inherit"
            w="auto">
            RMS
          </Text>
        </Box>
        <Box as="nav">
          <LinkBox
            display={{ base: "none", lg: "flex" }}
            gap="3rem"
            {...topRightButoonStyles}>
            <Link>Home</Link>
            <Link>About</Link>
            <Link>Blog</Link>
            <Link>FAQ's</Link>
          </LinkBox>
        </Box>
        <Box display={{ base: "none", lg: "flex" }}>
          <ButtonGroup {...flex} gap="1rem">
            <LoginButton />
            <SignUpButton />
          </ButtonGroup>
        </Box>

        <Box display={{ base: "flex", lg: "none" }}>
          <Menu>
            <MenuButton
              as={IconButton}
              aria-label="Options"
              icon={<HamburgerIcon />}
              variant="outline"
            />
            <MenuList>
              <MenuItem>
                <Link>Home</Link>
              </MenuItem>
              <MenuItem>
                <Link>About</Link>
              </MenuItem>
              <MenuItem>
                <Link>Blog</Link>
              </MenuItem>
              <MenuItem>
                <Link>FAQ's</Link>
              </MenuItem>
              <MenuItem>
                <LoginButton />
              </MenuItem>
              <MenuItem>
                <SignUpButton />
              </MenuItem>
            </MenuList>
          </Menu>
        </Box>
      </Flex>
      <Flex
        px="2rem"
        justifyContent="center"
        flexDir="column"
        alignItems={{
          base: "left",
          lg: "left",
        }}
        width={{
          base: "100%",
          lg: "50%",
        }}
        height="100%"
        gap={{
          base: "2rem",
          lg: "4rem",
        }}>
        <Flex flexDir="column" gap="1.7rem">
          <Heading
            as="h1"
            fontWeight={{
              base: 500,
              lg: 700,
            }}
            fontSize={{
              base: "1.6rem",
              md: "2rem",
              lg: "3rem",
            }}>
            Keep tabs on all your results from the comfort of your home
          </Heading>
          <Heading
            as="h3"
            fontSize={{
              base: ".9rem",
              md: "1.2rem",
            }}
            fontWeight={{
              base: 300,
              md: 500,
            }}>
            Enables all parties to manage results with what is fast proving an
            almost seamless approach
          </Heading>
        </Flex>

        <Flex
          wrap="wrap"
          gap="1rem"
          justifyContent={{
            base: "center",
            lg: "left",
          }}
          align="flex-end"
          textAlign="left"
          transition="transform 0.2s ease-in-out"
          w="100%">
          <Button
            borderRadius="16px"
            bgColor="#EDF2F1"
            color="#36819A"
            variant="ghost"
            colorScheme="#DC7F9B"
            p={{
              base: "8px 18px",
              lg: "12px 28px",
            }}
            _active={{ transform: "scale(1.1)" }}>
            View MVP
          </Button>
          <Button
            borderRadius="16px"
            bgColor="#36819A"
            color="#EDF2F1"
            variant="ghost"
            colorScheme="#DC7F9B"
            p={{
              base: "12px 18px",
              lg: "12px 28px",
            }}
            _active={{ transform: "scale(1.1)" }}>
            Create Account
          </Button>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Header;
