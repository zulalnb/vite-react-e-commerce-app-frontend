import { useMemo } from "react";
import { Link } from "react-router-dom";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

import { Button, Flex, Text } from "@chakra-ui/react";
import { Popconfirm, Table } from "antd";

import { deleteProduct, fetchProductList } from "../../../api";

function Products() {
  const queryClient = useQueryClient();

  const { isLoading, isError, data, error } = useQuery({
    queryKey: ["admin:products"],
    queryFn: fetchProductList,
  });

  const deleteMutation = useMutation({
    mutationFn: deleteProduct,
    onSuccess: () => queryClient.invalidateQueries("admin:products"),
  });

  const columns = useMemo(() => {
    return [
      { title: "Title", dataIndex: "title", key: "title" },
      { title: "Price", dataIndex: "price", key: "price" },
      { title: "Created At", dataIndex: "createdAt", key: "createdAt" },
      {
        title: "Action",
        key: "action",
        render: (text, record) => (
          <>
            <Link to={`${record._id}`}>Edit</Link>
            <Popconfirm
              title="Are you sure?"
              onConfirm={() => {
                deleteMutation.mutate(record._id, {
                  onSuccess: () => {
                    console.log("success");
                  },
                });
              }}
              onCancel={() => console.log("İptal edildi")}
              okText="Yes"
              cancelText="No"
              placement="left"
            >
              <a style={{ marginLeft: 10 }}>Delete</a>
            </Popconfirm>
          </>
        ),
      },
    ];
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error {error.message}</div>;
  }

  return (
    <div>
      <Flex justifyContent="space-between" alignItems="center">
        <Text fontSize="2xl" p="5">
          Products
        </Text>

        <Link to="new">
          <Button>New</Button>
        </Link>
      </Flex>

      <Table dataSource={data} columns={columns} rowKey="_id" />
    </div>
  );
}

export default Products;
