## General Guide to Optimizing Queries

* Index columns used in where / order by / group by clauses

Indexing helps to optimize queries because it saves the need to scan through entire tables to find a value.

* Union Clauses

Sometimes using the 'or' keywoard results in a full table scan when it is unnecessary. A union clause in place of an or can help merge two queries together resulting in a more performant query.

* Normalize tables

Use IDs and joiner tables to avoid redundant data.

* Optimal data types

Don't use more than you need - if you know the cap for something is small, make sure the data type reflects that.

* Trim columns

Instead of onewide table, consider breaking up the tables logically and semantically and normalize.

* Caching

Use a cache to avoid making repeated scans of frequently used queiries.