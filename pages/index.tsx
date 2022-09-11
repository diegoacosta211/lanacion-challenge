import { Box, Grid, GridItem, Heading, Image, Text, LinkBox, LinkOverlay, Breadcrumb, BreadcrumbItem, BreadcrumbLink } from '@chakra-ui/react'
import type { GetStaticProps, NextPage } from 'next'
import api, { Article, Tag } from '../articles/api';

type Props = {
  articles: Article[],
  tags: Tag[]
}

const Home: NextPage<Props> = ({ articles, tags }) => {
  return (
    <Box as="section">
      <Heading mb="4">Acumulado Grilla</Heading>
      <Breadcrumb mb="4" separator="&bull;">
        {tags.map((tag, idx) => (
          <BreadcrumbItem key={idx}>
            <BreadcrumbLink href={tag.slug}>{tag.text}</BreadcrumbLink>
          </BreadcrumbItem>
        ))}
      </Breadcrumb>
      <Grid gridTemplateColumns="repeat(auto-fill, minmax(250px, 1fr))" gap={8}>
        {articles.map((article) => (
          <GridItem key={article._id} as="article">
            <LinkBox>
              <Image
                alt={article.headlines.basic}
                src="https://via.placeholder.com/450"
                maxW="100%"
                height="auto"
                display="block"
                filter="brightness(110%)"
                mb="2"
                transition="all .25s ease-in-out"
                _hover={{
                  filter: "brightness(100%)",
                }}
              />
              <Text color="gray.500" fontSize="sm" mb="1">
                {article.display_date}
              </Text>
              <Heading
                mb="0"
                fontSize="lg"
                as={LinkOverlay}
                href={article.website_url}
              >
                {article.headlines.basic}
              </Heading>
            </LinkBox>
          </GridItem>
        ))}
      </Grid>
    </Box>
  );
}

export default Home;

export const getStaticProps: GetStaticProps = async () => {
  const { articles, tags } = await api.list();
  return {
    props: {
      articles,
      tags
    }
  }
}
