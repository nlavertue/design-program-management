import React, { useState } from 'react';
import {
  DataTable,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableHeader,
  TableBody,
  TableCell,
  TableToolbar,
  TableToolbarContent,
  Tabs,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
  Tag,
  Tile
} from 'carbon-components-react';
import { ArrowDown16, ArrowUp16 } from '@carbon/icons-react';
import { products, summaryData } from './data';
import './App.css';

const App = () => {
  const [activeTab, setActiveTab] = useState(0);

  const headers = [
    { key: 'product', header: 'PRODUCT' },
    { key: 'parent', header: 'PARENT' },
    { key: 'designLead', header: 'DESIGN LEAD' },
    { key: 'designTeam', header: 'DESIGN TEAM' },
    { key: 'designGaps', header: 'DESIGN GAPS' },
    { key: 'stakeholderMapHealth', header: 'STAKEHOLDER MAP HEALTH' },
    { key: 'teamMaturity', header: 'TEAM MATURITY' },
    { key: 'designDevTat', header: 'DESIGN-DEV TAT' },
    { key: 'customerInteraction', header: 'CUSTOMER INTERACTION' },
    { key: 'experienceArchitectureMaturity', header: 'EXPERIENCE ARCHITECTURE MATURITY' }
  ];

  const getHealthTag = (health) => {
    const tagTypes = {
      'STRONG': 'green',
      'MODERATE': 'yellow',
      'WEAK': 'red'
    };
    return <Tag type={tagTypes[health]} size="sm">{health}</Tag>;
  };

  const getInteractionTag = (interaction) => {
    const tagTypes = {
      'FRESH': 'green',
      'STALE': 'gray'
    };
    return <Tag type={tagTypes[interaction]} size="sm">{interaction}</Tag>;
  };

  const getMaturityTag = (maturity) => {
    const maturityLabels = {
      'LEADING': 'cyan',
      'ADVANCED': 'cyan',
      'ESTABLISHED': 'gray',
      'DEVELOPING': 'gray',
      'FOUNDATIONAL': 'gray'
    };
    return <Tag type={maturityLabels[maturity]} size="sm">{maturity}</Tag>;
  };

  const renderDesignTeam = (count) => {
    return (
      <div style={{ display: 'flex', gap: '4px' }}>
        {Array.from({ length: count }).map((_, i) => (
          <div key={i} style={{
            width: '24px',
            height: '24px',
            borderRadius: '50%',
            backgroundColor: '#8d8d8d',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'white',
            fontSize: '12px'
          }}>
            👤
          </div>
        ))}
      </div>
    );
  };

  const renderTatWithTrend = (tat, trend) => {
    return (
      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
        <span>{tat}</span>
        {trend === 'down' ? (
          <ArrowDown16 style={{ color: '#24a148' }} />
        ) : (
          <ArrowUp16 style={{ color: '#da1e28' }} />
        )}
      </div>
    );
  };

  const filteredProducts = activeTab === 0 
    ? products 
    : activeTab === 1 
    ? products.filter(p => p.parent.includes('WP'))
    : activeTab === 2
    ? products.filter(p => !p.parent.includes('WP') && !p.parent.includes('RHEA'))
    : products.filter(p => p.parent.includes('RHEA'));

  return (
    <div className="app-container">
      <div className="header">
        <h1>Design Program Management</h1>
      </div>

      <Tabs selectedIndex={activeTab} onChange={({ selectedIndex }) => setActiveTab(selectedIndex)}>
        <TabList aria-label="Product filters">
          <Tab>All Products</Tab>
          <Tab>WP Pilot</Tab>
          <Tab>Non-Pilot</Tab>
          <Tab>Rhea</Tab>
        </TabList>
      </Tabs>

      <div className="summary-cards">
        <Tile className="summary-card">
          <div className="summary-label">TOTAL PRODUCTS</div>
          <div className="summary-value">{summaryData.totalProducts}</div>
        </Tile>
        <Tile className="summary-card">
          <div className="summary-label">RHEA</div>
          <div className="summary-value">{summaryData.rhea}</div>
        </Tile>
        <Tile className="summary-card">
          <div className="summary-label">UNDOCUMENTED MARKERS</div>
          <div className="summary-value" style={{ color: '#da1e28' }}>{summaryData.undocumentedMarkers}</div>
        </Tile>
      </div>

      <DataTable rows={filteredProducts} headers={headers}>
        {({ rows, headers, getTableProps, getHeaderProps, getRowProps }) => (
          <TableContainer>
            <Table {...getTableProps()}>
              <TableHead>
                <TableRow>
                  {headers.map((header) => (
                    <TableHeader {...getHeaderProps({ header })} key={header.key}>
                      {header.header}
                    </TableHeader>
                  ))}
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row) => {
                  const product = products.find(p => p.id === row.id);
                  return (
                    <TableRow {...getRowProps({ row })} key={row.id}>
                      <TableCell>{product.product}</TableCell>
                      <TableCell>
                        <Tag size="sm">{product.parent}</Tag>
                      </TableCell>
                      <TableCell>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                          <div style={{
                            width: '24px',
                            height: '24px',
                            borderRadius: '50%',
                            backgroundColor: '#8d8d8d',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            color: 'white',
                            fontSize: '12px'
                          }}>
                            👤
                          </div>
                          <span>{product.designLead}</span>
                        </div>
                      </TableCell>
                      <TableCell>{renderDesignTeam(product.designTeam)}</TableCell>
                      <TableCell>{product.designGaps}</TableCell>
                      <TableCell>{getHealthTag(product.stakeholderMapHealth)}</TableCell>
                      <TableCell>{getMaturityTag(product.teamMaturity)}</TableCell>
                      <TableCell>{renderTatWithTrend(product.designDevTat, product.tatTrend)}</TableCell>
                      <TableCell>{getInteractionTag(product.customerInteraction)}</TableCell>
                      <TableCell>
                        <span style={{ 
                          fontSize: '18px', 
                          fontWeight: 'bold',
                          color: product.experienceArchitectureMaturity >= 4 ? '#24a148' : 
                                 product.experienceArchitectureMaturity >= 3 ? '#f1c21b' : '#da1e28'
                        }}>
                          {product.experienceArchitectureMaturity}
                        </span>
                      </TableCell>
                    </TableRow>
                  );
                })}
              </TableBody>
            </Table>
          </TableContainer>
        )}
      </DataTable>
    </div>
  );
};

export default App;

// Made with Bob
