'use client';
import React from 'react';
import styles from './style.module.scss';

export default function Index({ index, title, manageModal, link }) {
    return (
        <div
            onMouseEnter={(e) => { manageModal(true, index, e.clientX, e.clientY) }}
            onMouseLeave={(e) => { manageModal(false, index, e.clientX, e.clientY) }}
            onClick={() => window.location.href = link} // Link-Weiterleitung beim Klick
            className={styles.project}
        >
            <h2>{title}</h2>
        </div>
    )
}
