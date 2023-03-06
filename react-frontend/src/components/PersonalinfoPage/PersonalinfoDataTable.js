
import { Column } from 'primereact/column';
import { DataTable } from 'primereact/datatable';
import React, { useState } from 'react';
import _ from 'lodash';
import { Button } from 'primereact/button';
import { Avatar } from 'primereact/avatar';


const PersonalinfoDataTable = ({ items, onEditRow, onRowDelete, onRowClick }) => {
    
    const avatarTemplate0 = (rowData, { rowIndex }) => <Avatar image={rowData.avatar}  />
    const pTemplate1 = (rowData, { rowIndex }) => <p >{rowData.firstname}</p>
    const pTemplate2 = (rowData, { rowIndex }) => <p >{rowData.lastname}</p>
    const pTemplate3 = (rowData, { rowIndex }) => <p >{rowData.location}</p>
    const pTemplate4 = (rowData, { rowIndex }) => <p >{rowData.groupID}</p>
    const pTemplate5 = (rowData, { rowIndex }) => <p >{rowData.groupName}</p>

    const editTemplate = (rowData, { rowIndex }) => <Button onClick={() => onEditRow(rowData, rowIndex)} icon={`pi ${rowData.isEdit ? "pi-check" : "pi-pencil"}`} className={`p-button-rounded p-button-text ${rowData.isEdit ? "p-button-success" : "p-button-warning"}`} />;
    const deleteTemplate = (rowData, { rowIndex }) => <Button onClick={() => onRowDelete(rowIndex)} icon="pi pi-times" className="p-button-rounded p-button-danger p-button-text" />;
    
    return (
        <DataTable value={items} onRowClick={onRowClick} scrollable rowHover paginator rows={10}>
            <Column field="avatar" header="Avatar" body={avatarTemplate0} style={{ minWidth: "8rem" }} />
            <Column field="firstname" header="First Name" body={pTemplate1} sortable style={{ minWidth: "8rem" }} />
            <Column field="lastname" header="Surname Name" body={pTemplate2} sortable style={{ minWidth: "8rem" }} />
            <Column field="location" header="Location" body={pTemplate3} style={{ minWidth: "8rem" }} />
            <Column field="groupID" header="Group ID" body={pTemplate4} style={{ minWidth: "8rem" }} />
            <Column field="groupName" header="Group Name" body={pTemplate5} sortable style={{ minWidth: "8rem" }} />

            <Column header="Edit" body={editTemplate} />
            <Column header="Delete" body={deleteTemplate} />
        </DataTable>
    );
};

export default PersonalinfoDataTable;