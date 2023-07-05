const PostRepository = require("../repositories/posts.repository");

class postService {
  postRepository = new PostRepository();

  findAllPost = async () => {
    // repository 에 데이터요청
    const allPost = await this.postRepository.findAllPost();

    // 호출한 post 들을 정렬
    allPost.sort((a, b) => b.createdAt - a.createdAt);

    // 비즈니스 로직 수행 후 사용자에게 보여줄 데이터 가공
    return allPost.map((post) => {
      return {
        postId: post.postId,
        nickname: post.nickname,
        title: post.title,
        createdAt: post.createdAt,
        updatedAt: post.updatedAt,
      };
    });
  };

  createPost = async (nickname, password, title, content) => {
    const createPostData = await this.postRepository.createPost(
      nickname,
      password,
      title,
      content
    );

    return {
      postId: createPostData.null,
      nickname: createPostData.nickname,
      title: createPostData.title,
      content: createPostData.content,
      createdAt: createPostData.createdAt,
      updatedAt: createPostData.updatedAt,
    };
  };
}

module.exports = postService;
