import { useEffect, useState } from "react";
import SearchInput from "../components/SearchInput";
import FilterDropdown from "../components/FilterDropdown";
import PostTable from "../components/PostTable";
import AddPostButton from "../components/AddPostButton";
import AddPostModal from "../components/AddPostModal";
import { postAPI } from "../utils/http";
import ModalBlockPost from "../components/ModalBlockPost";
import { notification } from "antd";
import ModalEditPost from "../components/ModalEditPost";

interface PostRecord {
  id: string;
  title: string;
  content: string;
  image: string;
  create_at: string;
  isActive: boolean;
}

export default function ListPost() {
  const [posts, setPosts] = useState<PostRecord[]>([]);
  const [allPosts, setAllPosts] = useState<PostRecord[]>([]);
  const [isModalAddOpen, setIsModalAddOpen] = useState<boolean>(false);
  const [isModalBlockOpen, setIsModalBlockOpen] = useState<boolean>(false);
  const [isModalEditOpen, setIsModalEditOpen] = useState<boolean>(false);
  const [postAction, setPostAction] = useState<PostRecord | null>(null);
  const [searchKeyword, setSearchKeyword] = useState<string>("");
  const [filterStatus, setFilterStatus] = useState<string>("all");

  const loadAllPosts = async (): Promise<void> => {
    try {
      const response = await postAPI.get("posts");
      setAllPosts(response.data);
      applyFilters(response.data, searchKeyword, "all");
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    loadAllPosts();
  }, []);

  const applyFilters = (
    postsData: PostRecord[],
    keyword: string,
    status: string
  ) => {
    let filteredPosts = postsData;

    // Lọc theo từ khóa tìm kiếm
    if (keyword.trim()) {
      filteredPosts = filteredPosts.filter((post) =>
        post.title.toLowerCase().includes(keyword.toLowerCase())
      );
    }

    // Lọc theo trạng thái
    if (status !== "all") {
      filteredPosts = filteredPosts.filter((post) => {
        if (status === "published") return post.isActive === true;
        if (status === "inactive") return post.isActive === false;
        return true;
      });
    }

    setPosts(filteredPosts);
  };

  const handleSearch = async (value: string) => {
    setSearchKeyword(value);
    applyFilters(allPosts, value, filterStatus);
  };

  const handleFilterChange = (key: string) => {
    setFilterStatus(key);
    applyFilters(allPosts, searchKeyword, key);
  };

  //! Add post
  const handleAddPost = () => {
    console.log("Add new post");
    setIsModalAddOpen(true);
  };
  const handlePublish = async (payload: {
    title: string;
    imageUrl?: string;
    content: string;
  }) => {
    try {
      const now = new Date();
      const create_at = `${now.getDate()}/${
        now.getMonth() + 1
      }/${now.getFullYear()}`;
      const response = await postAPI.post("posts", {
        ...payload,
        create_at,
        isActive: true,
      });

      if (response.status === 201) {
        notification.success({ message: "Thêm bài viết thành công" });
        await loadAllPosts();
        setIsModalAddOpen(false);
      }
    } catch (error) {
      console.log(error);
      notification.success({ message: "Lỗi: thêm bài viết" });
    }
  };

  //! Block Post
  const showModalBlock = (record: PostRecord) => {
    if (!record.isActive) {
      notification.error({ message: "Bài viết đã ngừng xuất bản" });
      return;
    }
    setIsModalBlockOpen(true);
    setPostAction(record);
  };
  const handleBlock = async () => {
    console.log(postAction);
    const updatePost = { ...postAction, isActive: !postAction?.isActive };
    try {
      const response = await postAPI.put(`posts/${postAction?.id}`, updatePost);
      if (response.status === 200) {
        notification.success({ message: "Cập nhật trạng thái thành công" });
        await loadAllPosts();
      }
    } catch (error) {
      console.log(error);
      notification.error({ message: "Lỗi: Không thể chuyển trạng thái post" });
    }
    setPostAction(null);
    setIsModalBlockOpen(false);
  };

  //! Edit Post
  const showModalEdit = (record: PostRecord) => {
    setIsModalEditOpen(true);
    setPostAction(record);
  };
  const handleEdit = async (payload: {
    title: string;
    image?: string;
    content: string;
  }) => {
    if (!postAction) return;
    const updatePost = {
      ...postAction,
      title: payload.title,
      image: payload.image ?? postAction.image,
      content: payload.content,
    };
    try {
      const response = await postAPI.put(`posts/${postAction.id}`, updatePost);
      if (response.status === 200) {
        notification.success({ message: "Cập nhật bài viết thành công" });
        await loadAllPosts();
      }
    } catch (error) {
      console.log(error);
      notification.error({ message: "Lỗi: Cập nhật bài viết" });
    }
    setPostAction(null);
    setIsModalEditOpen(false);
  };

  //! Delete Post
  const showModalDelete = (record: PostRecord) => {
    console.log("Delete:", record);
  };

  return (
    <div className="mt-5 mx-20">
      <h1 className="text-2xl font-bold">Quản lý bài viết</h1>

      <div className="flex justify-between mt-3.5">
        <div className="flex gap-4">
          <SearchInput onSearch={handleSearch} />
          <FilterDropdown onFilterChange={handleFilterChange} />
        </div>
        <AddPostButton onClick={handleAddPost} />
      </div>

      <div className="mt-5">
        <PostTable
          data={posts}
          onBlock={showModalBlock}
          onEdit={showModalEdit}
          onDelete={showModalDelete}
        />
      </div>

      <AddPostModal
        open={isModalAddOpen}
        onClose={() => setIsModalAddOpen(false)}
        onPublish={handlePublish}
      />

      <ModalBlockPost
        open={isModalBlockOpen}
        onClose={() => setIsModalBlockOpen(false)}
        handleBlock={handleBlock}
      />

      <ModalEditPost
        open={isModalEditOpen}
        onClose={() => setIsModalEditOpen(false)}
        post={postAction ?? undefined}
        onEdit={handleEdit}
      />
    </div>
  );
}
