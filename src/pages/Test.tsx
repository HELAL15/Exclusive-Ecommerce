import { FC, memo, useState } from "react";
import { Table } from 'antd';
import type { TableColumnsType } from 'antd';
import { TableRowSelection } from "antd/es/table/interface";
import { Link } from "react-router-dom";
import { IoEye, IoPencil, IoTrash } from "react-icons/io5";
import useFetch from "../hooks/useFetch";
import { useTranslation } from "react-i18next";

/**
 * ==> props interface
 */
interface IProps {

}

/**
 * ==> Component
 */
const Test: FC<IProps> = ({  }) => {
  const columns: TableColumnsType = [
    { title: 'Name', dataIndex: 'name' , align:'center' },
    { title: 'Age', dataIndex: 'age' , align:'center' },
    { title: 'Address', dataIndex: 'address' , align:'center' },
    { title: 'Action', dataIndex: 'action' , align:'center' },
  ];

  const handleDelete = (id:number)=>{
    console.log(id);
    
  }

  const dataSource = Array.from({ length: 6 }).map((_, i) => ({
    key: i,
    name: `Edward King ${i}`,
    age: 32,
    address: `London, Park Lane no. ${i}`,
    action: 
    <div className="flex items-center justify-center gap-2">
      {i !== 0 &&<button onClick={()=>handleDelete(i)} className=" rounded px-4 py-3 btn-primary"><IoTrash/></button>}
      <Link to={`/update/${i}`} className=" rounded px-4 py-3 bg-yellow-500"><IoPencil/></Link>
      <Link to={`/view/${i}`} className=" rounded px-4 py-3 bg-primary text-white"><IoEye/></Link>
    </div>
  }));

  const [selectedRowKeys, setSelectedRowKeys] = useState<React.Key[]>([]);
  const onSelectChange = (newSelectedRowKeys: React.Key[]) => {
    console.log('selectedRowKeys changed: ', newSelectedRowKeys);
    setSelectedRowKeys(newSelectedRowKeys);
  };
  const rowSelection: TableRowSelection = {
    selectedRowKeys,
    onChange: onSelectChange,
  };

  const hasSelected = selectedRowKeys.length > 0;


  const {data} = useFetch("https://backend.smartvision4p.com/hotel/public/api/rooms")

  console.log(data);
  
  const {t} = useTranslation()

  return (
    <>
    <section>
      <div className="container">
        <h2>{t("test")}</h2>
      {hasSelected ? `Selected ${selectedRowKeys.length} items` : null}
        <Table rowSelection={rowSelection} columns={columns} dataSource={dataSource} />
      </div>
    </section>
    </>
  );
}

export default memo(Test);