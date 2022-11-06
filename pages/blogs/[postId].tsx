
import type { NextPage } from 'next';
import { useRouter } from 'next/router';

const BlogDetail: NextPage = () => {

  const router = useRouter();
  const { postId } = router.query;
  return (
    <div>Blog post id is {postId}</div>
  )
}

export default BlogDetail;