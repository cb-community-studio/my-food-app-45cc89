
import { Column } from 'primereact/column';
import { DataTable } from 'primereact/datatable';
import React, { useState } from 'react';
import _ from 'lodash';
import { Button } from 'primereact/button';
import { Image } from 'primereact/image';
import { Rating } from 'primereact/rating';


const FoodDataTable = ({ items, onEditRow, onRowDelete, onRowClick }) => {
    
    const pTemplate0 = (rowData, { rowIndex }) => <p >{rowData.dishname}</p>
    const imageTemplate1 = (rowData, { rowIndex }) => <Image src={rowData.image}  alt="Image" height="60px" />
    const pTemplate2 = (rowData, { rowIndex }) => <p >{rowData.description}</p>
    const pTemplate3 = (rowData, { rowIndex }) => <p >{rowData.price}</p>
    const pTemplate4 = (rowData, { rowIndex }) => <p >{rowData.foodCat}</p>
    const ratingTemplate5 = (rowData, { rowIndex }) => <Rating stars={5} style={{width:"20rem"}} value={rowData.dishRating} cancel={false}  />
    const tickTemplate6 = (rowData, { rowIndex }) => <i className={`pi ${rowData.isAvailable?"pi-check": "pi-times"}`}  ></i>

    const editTemplate = (rowData, { rowIndex }) => <Button onClick={() => onEditRow(rowData, rowIndex)} icon={`pi ${rowData.isEdit ? "pi-check" : "pi-pencil"}`} className={`p-button-rounded p-button-text ${rowData.isEdit ? "p-button-success" : "p-button-warning"}`} />;
    const deleteTemplate = (rowData, { rowIndex }) => <Button onClick={() => onRowDelete(rowIndex)} icon="pi pi-times" className="p-button-rounded p-button-danger p-button-text" />;
    
    return (
        <DataTable value={items} onRowClick={onRowClick} scrollable rowHover paginator rows={10}>
            <Column field="dishname" header="Name" body={pTemplate0} sortable style={{ minWidth: "8rem" }} />
            <Column field="image" header="Food" body={imageTemplate1} style={{ minWidth: "8rem" }} />
            <Column field="description" header="Description" body={pTemplate2} style={{ minWidth: "8rem" }} />
            <Column field="price" header="Price" body={pTemplate3} sortable style={{ minWidth: "8rem" }} />
            <Column field="foodCat" header="Category of Food" body={pTemplate4} sortable style={{ minWidth: "8rem" }} />
            <Column field="dishRating" header="Rating" body={ratingTemplate5} sortable style={{ minWidth: "8rem" }} />
            <Column field="isAvailable" header="Availability" body={tickTemplate6} sortable style={{ minWidth: "8rem" }} />

            <Column header="Edit" body={editTemplate} />
            <Column header="Delete" body={deleteTemplate} />
        </DataTable>
    );
};

export default FoodDataTable;