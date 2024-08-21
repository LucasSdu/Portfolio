'use client';
import React from 'react';


export default function Index({ index, title, manageModal, link }) {
    return (
        <div
            onMouseEnter={(e) => { manageModal(true, index, e.clientX, e.clientY) }}
            onMouseLeave={(e) => { manageModal(false, index, e.clientX, e.clientY) }}
            onClick={() => window.location.href = link}
            className={styles.project}
        >
            <h2>{title}</h2>
        </div>
    )
}
